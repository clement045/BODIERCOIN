<template>

    <div class="newsfeed">
        <div class="new">
            <h4>Présentation du Bordier Coin à Pleutres-la-Bravache</h4>
            <p>Les habitants ont organisé un feu d'artifices d'une douzaine d'heures en vue de l'arrivée du fondateur à Pleutres.
                Les Pleutrois on accepté que le budget municipal pour la décénie soit alloué à l'animation en vue de créer une "belle fête populaire".
            </p>
            <p></p>
        </div>
        <div class="new">
            <h4>Présentation du Bordier Coin à Supluplu-les-Bouibouins</h4>
            <p>Une présentation de cette belle monnaie aura lieu à la salle communale des fêtes de Supluplu-les-Bouibouins, le 15/12/2020 à 10h30. Le fondateur émérite du Bordier Coin sera présent, afin d'expliquer sa démarche, et d'inciter les simples d'esprits à l'utiliser.</p>
            <p></p>
        </div>
    </div>

</template>

<script>
export default {
    name: 'News'
}
</script>
<style scoped>
    .new {
        padding: 10px;
    }
    .new h4::before {
        content: "♥";
        color: #FFA008;
        padding-right: 10px;
    }
</style>